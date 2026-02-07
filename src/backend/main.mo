import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form types
  type BuyerType = {
    #consumer;
    #business;
  };

  type Inquiry = {
    name : Text;
    email : Text;
    company : ?Text;
    buyerType : BuyerType;
    message : Text;
    consent : Bool;
  };

  var inquiries = List.empty<Inquiry>();

  // Public contact form submission - accessible to everyone including guests
  public shared ({ caller }) func submitForm(
    name : Text,
    email : Text,
    company : ?Text,
    buyerType : BuyerType,
    message : Text,
    consent : Bool,
  ) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      company;
      buyerType;
      message;
      consent;
    };

    inquiries.add(inquiry);
  };

  // Admin-only function to retrieve all inquiries
  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can retrieve inquiries");
    };
    inquiries.toArray();
  };
};

export class Constants {
    // PERMISOS ID
    public static PERMISSION_ID_ADMIN = 'e5c6692c-e8b0-4988-9a6e-4aaef4dc01ab';
    // GEOLOCATION
    public static DEFAULT_CENTER_COORDS = { lat: 25.76891, lng: -80.1360484 };

    // ROLES ID
    public static ROLE_ADMIN = 'e5c6692c-e8b0-4988-9a6e-4aaef4dc01a4';
    public static ROLE_LOANER = 'e5c6692c-e8b0-4988-9a6e-4aaef4dc01a3';
    public static ROLE_BORROWER = 'e5c6692c-e8b0-4988-9a6e-4aaef4dc01a2';

    // GOVID TYPES
    public static GOVID_TYPES = [
        {id:'e5c6192c-e8b0-4988-9a6e-4aaef4dc01a1', name: 'C.I'},
        {id:'e5c6612c-e8b0-4988-9a6e-4aaef4dc01a0', name: 'Pasaporte'}
    ];

    // USERS TYPES
    public static TYPE_ADMIN = 'Admin';
    public static TYPE_BORROWER = 'Borrower';
    public static TYPE_LOANER = 'Loaner';

    // PAYMENT STATUS
    public static PAYMENT_STATUS_PENDING = 'e5c6612c-e8b3-4988-9a6e-4aaef4dc31a0';
    public static PAYMENT_STATUS_APPROVED_PENDING = 'e5c6111c-e8b1-4988-9a6e-4aaef4dc05a1';
    public static PAYMENT_STATUS_APPROVED = 'e5c6108c-e3b1-4988-9a6e-4aaef4dc05a1';
    public static PAYMENT_STATUS_REJECTED = 'e5c6100c-e8b1-4988-9a6e-4aaef4dc05a1';

    // CREDIT STATUS
    public static CREDIT_STATUS_PENDING = 'e5c6612c-e8b3-4988-9a6e-4aaef4dc31a0';
    public static CREDIT_STATUS_REJECTED = 'e5c6100c-e8b1-4988-9a6e-4aaef4dc05a1';
    public static CREDIT_STATUS_ACTIVE = 'e5c6192c-e8b1-4988-9a6e-4aaef4dc05a1';
    public static CREDIT_STATUS_COMPLETED = 'e5c6612c-e8b2-4988-9a6e-4aaef4dc01b0';

    // PIPELINE STATUS
    public static PIPELINE_STATUS_ACTIVE = 'e5c6192c-e8b1-4988-9a6e-4aaef4dc05a1';
    public static PIPELINE_STATUS_INACTIVE = 'e5c6105c-e3b1-4988-9a6e-4aaef4dc05a1';

    // ORGANIZATION STATUS
    public static ORGANIZATION_STATUS_ACTIVE = 'e5c6192c-e8b1-4988-9a6e-4aaef4dc05a1';
    public static ORGANIZATION_STATUS_INACTIVE = 'e5c6105c-e3b1-4988-9a6e-4aaef4dc05a1';

    // STEPS_TYPE
    public static STEPS_TYPE_FORMIO = 'Formio';
    public static STEPS_TYPE_GENERAL = 'General';
    public static STEPS_TYPE_TECHNIC = 'Technic';
	
}

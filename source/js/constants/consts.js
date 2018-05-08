export const LOCALSTORAGE_ID_TOKEN_KEY = 'id_token';
export const LOCALSTORAGE_ACCESS_TOKEN_KEY = 'access_token';
export const LOCALSTORAGE_REFRESH_TOKEN_KEY = 'refreshToken';
export const LOCALSTORAGE_EXPIRES_AT_KEY = 'expires_at';
export const LOCALSTORAGE_ROLE_KEY = 'role';
export const LOCALSTORAGE_USERNAME_KEY = 'username';

export const AUTH_STATE_ACTION_LOGIN = 'login';
export const AUTH_STATE_ACTION_SIGNUP = 'signup';

export const USER_ROLE = 'fitassist-user';
export const ADMIN_ROLE = 'firassist-admin'

export const BASE_URL = 'http://' + window.location.hostname + ':8080/';
export const SERVER_BASE_URL = 'http://' + window.location.hostname + ':3300/';

export const EXERCISE_MECHANICS_COMPOUND = 'compound';
export const EXERCISE_MECHANICS_ISOLATION = 'isolation';

export const exerciseMechanicsObj = {
    [EXERCISE_MECHANICS_COMPOUND]: 'Compound',
    [EXERCISE_MECHANICS_ISOLATION]: 'Isolation'
}

export const EXERCISE_DIFFICULTY_BEGINNER = 'beginner';
export const EXERCISE_DIFFICULTY_INTERMEDIATE = 'intermediate';
export const EXERCISE_DIFFICULTY_EXPERT = 'expert';

export const exerciseDifficultyLevelObj = {
    [EXERCISE_DIFFICULTY_BEGINNER]: 'Beginner',
    [EXERCISE_DIFFICULTY_INTERMEDIATE]: 'Intermediate',
    [EXERCISE_DIFFICULTY_EXPERT]: 'Expert',
}

export const GENDER_MALE = 'male';
export const GENDER_FEMALE = 'female';
export const GENDER_TRANSGENDER = 'transgender';

export const USER_STATUS_ACTIVE = 1;
export const USER_STATUS_INACTIVE = 0;

export const USER_STATUS_ACTIVE_STR = 'Active';
export const USER_STATUS_INACTIVE_STR = 'Inactive';

export const STATUS_ACTIVE = 1;
export const STATUS_INACTIVE = 0;

export const STATUS_ACTIVE_STR = 'Active';
export const STATUS_INACTIVE_STR = 'Inactive';

export const RECIPE_DIFFICULTY_EASY = 'easy';
export const RECIPE_DIFFICULTY_MEDIUM = 'medium';
export const RECIPE_DIFFICULTY_HARD = 'hard';

export const RECIPE_TYPE_VEGETARIAN = 'vegetarian';
export const RECIPE_TYPE_VEGAN = 'vegan';
export const RECIPE_TYPE_DAIRY_FREE = 'dairy-free';
export const RECIPE_TYPE_KOSHER = 'kosher';
export const RECIPE_TYPE_ISLAM = 'islam';
export const RECIPE_TYPE_COELIAC = 'coeliac';
export const RECIPE_TYPE_PALEO = 'paleo';
export const RECIPE_TYPE_PASCATERIAN = 'pescaterian';

export const GOAL_GAIN_MUSCLE = 'gain_muscle';
export const GOAL_GAIN_FLEXIBILITY = 'gain_flexibility';
export const GOAL_LOSE_FAT = 'lose_fat';
export const GOAL_GAIN_STRENGTH = 'gain_strength';
export const GOAL_GAIN_POWER = 'gain_power';
export const GOAL_INCREASE_ENDURANCE = 'increase_endurance';

export const TASKS_UNITS_KMS = 'kms';
export const TASKS_UNITS_KGS = 'kgs';

export const TASKS_UNITS_KMS_STR = 'Kilometers';
export const TASKS_UNITS_KGS_STR = 'Kilograms';

export const TIME_TYPE_STANDARD = 'standard';
export const TIME_TYPE_TIME_WINDOW = 'time_window';
export const TIME_TYPE_TIMED = 'timed';

export const WORKOUT_SCHEDULE_TYPE_AUTO = 1;
export const WORKOUT_SCHEDULE_TYPE_MANUAL = 2;

export const WORKOUT_SCHEDULE_TYPE_AUTO_STR = 'Automatic';
export const WORKOUT_SCHEDULE_TYPE_MANUAL_STR = 'Manual';

export const DAY_DRIVE_BREAKFAST = 'breakfast';
export const DAY_DRIVE_LUNCH = 'lunch';
export const DAY_DRIVE_DINNER = 'dinner';
export const DAY_DRIVE_SNACKS = 'snacks';

export const FRIEND_APPROVED = 2;
export const FRIEND_PENDING = 1;

export const FRIENDSHIP_STATUS_SELF = 'self';
export const FRIENDSHIP_STATUS_FRIEND = 'friend';
export const FRIENDSHIP_STATUS_REQUEST_RECEIVED = 'request_received';
export const FRIENDSHIP_STATUS_REQUEST_SENT = 'request_sent';
export const FRIENDSHIP_STATUS_UNKNOWN = 'unknown';

export const OK_STATUS = 200;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const NOT_FOUND = 404;
export const MEDIA_ERROR_STATUS = 415;
export const VALIDATION_FAILURE_STATUS = 417;
export const DATABASE_ERROR_STATUS = 422;
export const INTERNAL_SERVER_ERROR = 500;

export const SESSION_EXPIRED_URL_TYPE = 'session_expired';
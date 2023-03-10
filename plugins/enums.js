// define('SERVER_URL', 'https://app.ckpcet.ac.in/');
// //define('SERVER_URL', 'http://app.ckpcet-ac-in/');
// define('DEPT_ADM', 1);
// define('DEPT_CEED', 2);
// define('DEPT_COED', 3);
// define('DEPT_ELED', 4);
// define('DEPT_ECED', 5);
// define('DEPT_MEED', 6);
// define('DEPT_ASHD', 7);
// define('DEPT_PGMD', 8);

// define('DEPT_ADM_NAME', 'Administrative Department');
// define('DEPT_CEED_NAME', 'Civil Engineering Department');
// define('DEPT_COED_NAME', 'Computer Engineering Department');
// define('DEPT_ELED_NAME', 'Electrical Engineering Department');
// define('DEPT_ECED_NAME', 'Electonics and Communication Engineering Department');
// define('DEPT_MEED_NAME', 'Mechanical Engineering Department');
// define('DEPT_ASHD_NAME', 'Applied Science and Huminity Department');

// define('TEACHING', 'TEACHING');
// define('NON_TEACHING', 'NON_TEACHING');

// $departments = [
//     DEPT_ADM => DEPT_ADM_NAME,
//     DEPT_CEED => DEPT_CEED_NAME,
//     DEPT_COED => DEPT_COED_NAME,
//     DEPT_ELED => DEPT_ELED_NAME,
//     DEPT_ECED => DEPT_ECED_NAME,
//     DEPT_MEED => DEPT_MEED_NAME,
//     DEPT_ASHD => DEPT_ASHD_NAME,
// ];

// $publciations = [
//     'B_TITLE' => 'BOOK TITLE',
//     'B_CHAPTER' => 'BOOK CHAPTER',
//     'N_CONF' => 'NATIONAL CONFERENCE',
//     'I_CONF' => 'INTERNATIONAL CONFERENCE',
//     'N_JOUR' => 'NATIONAL JOURNAL',
//     'I_JOUR' => 'INTERNATIONAL JOURNAL',
// ];

// $grTypes = [
//     'STUDENT' => 'STUDENT',
//     'STAFF' => 'STAFF',
//     'PARENT' => 'PARENT',
//     'OTHER' => 'OTHER'
// ];

//department in-charge ids
export const HeadOfDeptIds = ['488', '432', '440', '453', '462', '474'];

export const DeptIdDetails = {
    'DEPT_ADM': 1,
    'DEPT_CEED': 2,
    'DEPT_COED': 3,
    'DEPT_ELED': 4,
    'DEPT_ECED': 5,
    'DEPT_MEED': 6,
    'DEPT_ASHD': 7,
    'DEPT_PGMD': 8,
};

export const DeptDetailFromSlugDetails = {
    'DEPT_ADM': { id: 1, dataFileName: '', code: '' },
    'civil': { id: 2, dataFileName: 'civil', code: 'cied' },
    'computer': { id: 3, dataFileName: 'computer', code: 'coed' },
    'electrical': { id: 4, dataFileName: 'electrical', code: 'eled' },
    'electronics-and-communication': { id: 5, dataFileName: 'ec', code: 'eced' },
    'mechanical': { id: 6, dataFileName: 'mechanical', code: 'meed' },
    'applied-science': { id: 7, dataFileName: 'applied-science', code: '' },
    'DEPT_PGMD': { id: 8, dataFileName: '', code: '' },
};

enum GenderList {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other',
}
export interface CandidateFormData {
    name:string,
    gender:GenderList,
    surname: string,
    email:string,
    password:string,
    confirmPassword?:string,
    phoneNumber:string,
    city: string,
    country: string,
    agency: string,
    educationDegree:string,
    currentJobTitle:string,
    stateProvince:string
}


export class ProfileDTO {

    constructor(public profession:string, public firstName: string, public lastName: string,
        public dateOfBirth: string, public gender: string, public email: string,public  phone: string,
        public academicEducations: string[], public professionalExperiences: string[]) { 
    
    }
}
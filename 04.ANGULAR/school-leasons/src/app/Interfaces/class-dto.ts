import { StudentDTO } from "./student-dto";

export interface ClassDTO {
    id: number;
    name: string;
    description: string;
    students : StudentDTO[];
}

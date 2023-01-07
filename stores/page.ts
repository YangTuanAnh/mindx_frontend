import { makeAutoObservable } from 'mobx';

export interface InformationProps {
    name: string;
    email: string;
    mobile: string;
    github: string;
    linkedin: string;
};
export interface ExperiencesProps {
    jobTitle: string;
    company: string;
    startDate: Date;
    endDate: Date;
    jobDescription: string;
};
export interface EducationProps {
    university: string;
    faculty: string;
    GPA: number;
};
export interface PageItems {
    information: InformationProps;
    summary: string;
    experience: ExperiencesProps;
    education: EducationProps;
    skills: string[];
};

export class PageStore {
    pageList: PageItems[];

    constructor() {
        this.pageList = this._getPages();
        makeAutoObservable(this);
    }

    private _getPages = (): PageItems[] => {
        const localStorageNotes = localStorage.getItem('notes');
        if (localStorageNotes === undefined) return [];
        const parsedLocalStorageNotes = JSON.parse(
            localStorageNotes!
        ) as PageItems[];

        if (parsedLocalStorageNotes?.length) return parsedLocalStorageNotes;
        else return [];
    }
}
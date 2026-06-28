export type Info = {
    id:number;
    name:string
    count:number
}


export type Application = {
    id: string;
    full_name: string;
    email: string;
    created_at: string;
    job_id: string;
    jobs: {
        title: string;
        company: string;
    } | null;
}
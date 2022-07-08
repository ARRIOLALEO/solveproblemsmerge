// TODO: Delete this file after Candidate API call has been completed
import type {Candidate} from '../../types';

const getRandomStatus = () => {
    const statusArray = ['Candidate', 'Approved', 'Rejected'];
    const randomStatus = statusArray[Math.floor(Math.random() * statusArray.length)];
    return randomStatus;
};

export const createSampleCandidates = (n:number):Candidate[] => {
    const candidateList: Candidate[] = new Array(n).fill('').map((_, i) => ({
        id: `${i}`,
        email: `testemail${i}@test.com`,
        phone: '123-456-789',
        password: '123456',
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
        currentTitle: 'Product Manager',
        desiredTitle: 'Janitor',
        location: 'Valencia, Spain',
        applicationStatus: getRandomStatus(),
    }));
    return candidateList;
};

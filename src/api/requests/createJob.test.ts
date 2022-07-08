import {APIInstance} from '../apiInstance';
import {createJob} from './createJob';

import {
    errorNotification,
    successNotification,
} from 'src/utils';

jest.mock('../APIInstance', () => ({
    APIInstance: {
        post: jest.fn()
    }
}));

jest.mock('src/utils', () => ({
    errorNotification: jest.fn(),
    successNotification: jest.fn(),
}));

const mockedAPIInstance = APIInstance as jest.Mocked<typeof APIInstance>

describe('createJob', () => {
    it('should return "undefined"', async () => {
        const response = await createJob({
            title: '',
            fullTitle: '',
            shortcode: '',
            state: '',
            draft: '',
            derparment: '',
            locationString: '',
            country: '',
            countryCode: '',
            region: '',
            regionCode: '',
            city: '',
            zipCode: ''
        });
        expect(response).toBeUndefined()
    })

    it('should call APIInstance.post', async () => {
        await createJob({
            title: '',
            fullTitle: '',
            shortcode: '',
            state: '',
            draft: '',
            derparment: '',
            locationString: '',
            country: '',
            countryCode: '',
            region: '',
            regionCode: '',
            city: '',
            zipCode: ''
        });
        expect(APIInstance.post).toHaveBeenCalled()
    })

    it('should call APIInstance.post with parameters ("/jobs/item", params)', async () => {
        const params = {
            title: '',
            fullTitle: '',
            shortcode: '',
            state: '',
            draft: '',
            derparment: '',
            locationString: '',
            country: '',
            countryCode: '',
            region: '',
            regionCode: '',
            city: '',
            zipCode: ''
        };
        await createJob(params);
        expect(APIInstance.post).toHaveBeenCalledWith('/jobs/item', params)
    })

    it('should call successNotification with parameter "Job Created"', async () => {
        await createJob({
            title: '',
            fullTitle: '',
            shortcode: '',
            state: '',
            draft: '',
            derparment: '',
            locationString: '',
            country: '',
            countryCode: '',
            region: '',
            regionCode: '',
            city: '',
            zipCode: ''
        });
        expect(successNotification).toHaveBeenCalledWith('Job Created')
    })

    it('should call errorNotification with parameters (Error, "Create job Error")', async () => {
        mockedAPIInstance.post.mockRejectedValue({
            message: 'Error',
        });
        await createJob({
            title: '',
            fullTitle: '',
            shortcode: '',
            state: '',
            draft: '',
            derparment: '',
            locationString: '',
            country: '',
            countryCode: '',
            region: '',
            regionCode: '',
            city: '',
            zipCode: ''
        });
        expect(errorNotification).toHaveBeenCalledWith(new Error('Error'), 'Create job Error')
    })
})
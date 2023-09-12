import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyBpm_vnVj1VkisCkb_1HlJT4eBCHiryvWE',
    cx: '262b84ed44e8f4035',
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
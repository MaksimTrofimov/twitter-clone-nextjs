import axios from 'axios';
import { addFakeTweetData, addFakeTweetsData } from '@/utils/fakeData';

const BASE_URL = 'https://dummyjson.com/posts';

async function fetchClient(url = BASE_URL) {
  try {
    const response = await axios({
      url,
    });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

function handleError(error) {
  if (error.response) {
    console.error(
      `Request failed: ${error.response.status} - ${error.response.statusText}`,
    );
  } else if (error.request) {
    console.error('No response received:', error.request);
  } else {
    console.error('Error setting up request:', error.message);
  }
  throw error;
}

export async function getTweet(id) {
  const data = await fetchClient(`${BASE_URL}/${id}`);
  return addFakeTweetData(data);
}

export async function getTweets() {
  const data = await fetchClient(BASE_URL);
  return addFakeTweetsData(data);
}

import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class DiscussionSource {
  static async getAllDiscussion(keyword) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.DISCUSSION_SEARCH(keyword)}`,
        headers: {
          auth: `${jwt}`,
        },
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getDiscussion(id) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.DISCUSSION_DETAIL(id)}`,
        headers: {
          auth: `${jwt}`,
        },
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getUserDiscussion() {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.DISCUSSION_USER}`,
        headers: {
          auth: `${jwt}`,
        },
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getUserOtherDisscussion(_id) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const response = await axios({
        url: `${API_ENDPOINT.USER_DISCUSSION_DETAIL(_id)}`,
        method: 'GET',
        headers: {
          auth: `${jwt}`,
        },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data.data;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    }
  }

  static async addDiscussion(discussion) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.DISCUSSION}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          auth: `${jwt}`,
        },
        data: JSON.stringify(discussion),
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getDiscussionReply(id) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.DISCUSSION_REPLY(id)}`,
        headers: {
          auth: `${jwt}`,
        },
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async addDiscussionReply(id, reply) {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.DISCUSSION_REPLY(id)}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          auth: `${jwt}`,
        },
        data: JSON.stringify(reply),
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }

  static async getDiscussionCategory() {
    try {
      const jwt = localStorage.getItem('token').replaceAll('"', '');
      const responseJson = await axios({
        url: `${API_ENDPOINT.DISCUSSION_CATEGORY}`,
        headers: {
          auth: `${jwt}`,
        },
      });
      return responseJson.data.data;
    } catch (error) {
      return console.log(error);
    }
  }
}
export default DiscussionSource;
import axios from 'axios';
const GUEST_GET_ALL_URL='http://localhost:8089/Guest/getAllGuest';
const GUEST_ADD_URL='http://localhost:8089/Guest/addGuest';
const GUEST_DELETE_URL='http://localhost:8089/Guest/deleteGuest';

class GuestService{

    getAllGuests(){
        return axios.get(GUEST_GET_ALL_URL);
    }

    addGuests(guest){
        return axios.post(GUEST_ADD_URL,guest);
    }
    updateGuest(guestId, guest){
        return axios.put("http://localhost:8089/Guest/updateGuest/" +guestId, guest)
    }

    deleteGuest(guestId){
        return axios.delete(GUEST_DELETE_URL + '/' + guestId);
    }
}
export default new GuestService();
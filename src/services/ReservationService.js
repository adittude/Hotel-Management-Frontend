import axios from 'axios';
const RESERVATION_GET_ALL_URL='http://localhost:8099/reservation/ShowAllReservations';
const RESERVATION_ADD_URL='http://localhost:8099/reservation/addReservation';
const RESERVATION_DELETE_URL='http://localhost:8099/reservation/cancelReservation';

class ReservationService{

    getAllReservations(){
        return axios.get(RESERVATION_GET_ALL_URL);
    }

    addReservations(reservation){
        return axios.post(RESERVATION_ADD_URL,reservation);
    }

    deleteReservation(reservationId){
        return axios.delete(RESERVATION_DELETE_URL + '/' + reservationId);
    }
}
export default new ReservationService();
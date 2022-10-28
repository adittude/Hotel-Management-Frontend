import axios from 'axios';
const ROOM_GET_ALL_URL='http://localhost:8086/room/get';
const ROOM_ADD_URL='http://localhost:8086/room/add';
const ROOM_DELETE_URL='http://localhost:8086/room/delete';
const ROOM_AVAILABLE='http://localhost:8086/rooms/findRoomAvl';

class RoomService{

    getAllRooms(){
        return axios.get(ROOM_GET_ALL_URL);
    }

    addRooms(room){
        return axios.post(ROOM_ADD_URL,room);
    }

    deleteRoom(roomId){
        return axios.delete(ROOM_DELETE_URL + '/' + roomId);
    }

    getAvailableRooms(){
        return axios.get(ROOM_AVAILABLE);
    }
}
export default new RoomService();
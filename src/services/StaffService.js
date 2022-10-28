import axios from 'axios';
const STAFF_GET_ALL_URL='http://localhost:8088/Staff/getAllEmp';
const STAFF_ADD_URL='http://localhost:8088/Staff/addEmp';
const STAFF_DELETE_URL='http://localhost:8088/Staff/deleteByEmp';

class StaffService{

    getAllStaffs(){
        return axios.get(STAFF_GET_ALL_URL);
    }

    addStaffs(staff){
        return axios.post(STAFF_ADD_URL,staff);
    }

    deleteStaff(staffId){
        return axios.delete(STAFF_DELETE_URL + '/' + staffId);
    }

}
export default new StaffService();
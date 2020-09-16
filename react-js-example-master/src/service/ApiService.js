import axios from 'axios';

//const LOAN_API_BASE_URL = 'http://localhost:8081/loan-api/addLoan';
//const onSuccess='success';
//onst onFailure='failure';
class ApiService {


    addLoan(loan) {
        //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
         //axios.post(LOAN_API_BASE_URL+'/addLoan'+ loan);
         //axios.post(`LOAN_API_BASE_URL`, { loan })
         axios.post('http://localhost:8081/loan-api/addLoan',loan)
         .then(res => {
           console.log(res);
           console.log(loan);
         })
        
    }
    

    

}

export default new ApiService();
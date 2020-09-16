import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddLoanComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            borrowerName: '',
            loanType: '',
            loanTerm: '',
            loanAmount: '',
        property: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            zipCode: '',
            legalDocument: '',
            }
        };
        this.saveLoan = this.saveLoan.bind(this);
    }

    saveLoan = (e) => {
        e.preventDefault();
        let loan = {
                    borrowerName: this.state.borrowerName,
                    loanType: this.state.loanType, 
                    loanTerm: this.state.loanTerm,
                    loanAmount: this.state.loanAmount, 
                    property: {
                        addressLine1: this.state.addressLine1, 
                        addressLine2: this.state.addressLine2, 
                        city: this.state.city,
                        zipCode: this.state.zipCode,
                        legalDocument: this.state.legalDocument
                    }

                   
                    
                };

        ApiService.addLoan(loan)
            // .then(res => {
            //     this.setState({message : '/loan added successfully.'});
            //     this.props.history.push('/loan');
            // });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Loan</h2>
                <form>
                <div className="form-group">
                    <label>Borrower Name:</label>
                    <input type="text" placeholder="borrowerName" name="borrowerName" className="form-control" value={this.state.borrowerName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Loan Type:</label>
                    <input type="text" placeholder="loanType" name="loanType" className="form-control" value={this.state.loanType} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Loan Term:</label>
                    <input type="text" placeholder="loanTerm" name="loanTerm" className="form-control" value={this.state.loanTerm} onChange={this.onChange} required/>
                </div>

                <div className="form-group">
                    <label>Loan Amount:</label>
                    <input type="text" placeholder="loanAmount" name="loanAmount" className="form-control" value={this.state.loanAmount} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>AddressLine1:</label>
                    <input type="text" placeholder="addressLine1" name="addressLine1" className="form-control" value={this.state.addressLine1} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>AddressLine2:</label>
                    <input type="text" placeholder="addressLine2" name="addressLine2" className="form-control" value={this.state.addressLine2} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>ZipCode:</label>
                    <input type="text" placeholder="zipCode" name="zipCode" className="form-control" value={this.state.zipCode} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>LegalDocument:</label>
                    <input type="text" placeholder="legalDocument" name="legalDocument" className="form-control" value={this.state.legalDocument} onChange={this.onChange}/>
                </div>
                <button className="btn btn-success" onClick={this.saveLoan}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddLoanComponent;
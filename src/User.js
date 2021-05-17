import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


class User extends Component{
    constructor(props) {
        super(props);

		this.state = {
            modules: AllCommunityModules,
            columnDefs: [
                {
                    headerName: "id", 
                    field: "id"
                },
                {
                    headerName: "Name",
                    field: "name"
                },
                {
                    headerName: "UserName",
                    field: "username"
                },
                {
                    headerName: 'email',
                    field: 'email',
                },
                {
                    headerName: 'Address',
                    field: 'address',
                    
                },
                {
                    headerName: 'phone',
                    field: 'phone',
                },
                {
                    headerName: 'Website',
                    field: 'website',
                },
                {
                    headerName: 'Company',
                    field: 'company',
                },

            ],
            rowData: null,

            defaultColDef: {
                width: 150,
                editable: true,
                filter: 'agTextColumnFilter',
                floatingFilter: true,
                resizable: true,
            
            }
           
        
	    }
    }

    
		

    onGridReady = (params) => {
        
        const updateData = (data) => {
            this.setState({ rowData: data });
         };
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(resp=>updateData(resp))





        // this.gridApi = params.api;
        // this.gridColumnApi = params.columnApi;
    
        // const updateData = (data) => {
        //   this.setState({ rowData: data });
        // };
    
        // fetch('https://jsonplaceholder.typicode.com/users')
        //   .then(resp=>resp.json())
        //   .then(resp=>console.log(resp)
        //             )
    };

    render() {
		return (
			<div
				className="ag-theme-balham"
				style={{
					height: '380px',
					width: '86%'
				}}
			>
				<AgGridReact
                    modules={this.state.modules}
					columnDefs={this.state.columnDefs}
                    onGridReady={this.onGridReady}
					rowData={this.state.rowData}
                    defaultColDef={this.state.defaultColDef}
                    >
				</AgGridReact>
			</div>
		);
	}
}
export default User;
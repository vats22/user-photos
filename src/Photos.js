import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


class Photos extends Component{
    constructor(props) {
        super(props);

		this.state = {
            modules: AllCommunityModules,
            columnDefs: [
                {
                    headerName: "Alubum", 
                    field: "albumId"
                },
                {
                    headerName: "id", 
                    field: "id"
                },              
                {
                    headerName: "Title",
                    field: "title"
                },
                {
                    headerName: "Image",
                    field: "url",
                    type: ['image', 'nonEditableColumn'],
                },
                {
                    headerName: 'ThumbnailUrl',
                    field: 'thumbnailUrl',
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
        fetch('https://jsonplaceholder.typicode.com/photos')
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
					height: '500px',
					width: '54%'

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
export default Photos;
import { LightningElement, wire } from 'lwc';
import fetchApplicant from '@salesforce/apex/ApplicantProvider.fetchApplicant';

export default class ApplicantTab extends LightningElement {
    pageSizeOptions = [5, 10, 25, 50, 75, 100];
    applicantList = [];
    totalRecords = 0;
    pageSize;
    totalPages;
    pageNumber = 1;
    recordsToDisplay = [];

    @wire(fetchApplicant)
    wiredApplicant({ error, data }) {
        if (data) {
            this.applicantList = data; // Corrected from result to data
            this.totalRecords = data.length;
            this.pageSize = this.pageSizeOptions[0];
            this.paginationHelper();
        } else if (error) {
            console.error('Error fetching applicants:', error);
        }
    }

    handleRecordsPerPage(event) {
        this.pageSize = parseInt(event.target.value, 10); // Parse to integer
        this.paginationHelper();
    }

    previousPage() {
        this.pageNumber = this.pageNumber - 1;
        this.paginationHelper();
    }

    nextPage() {
        this.pageNumber = this.pageNumber + 1;
        this.paginationHelper();
    }

    firstPage() {
        this.pageNumber = 1;
        this.paginationHelper();
    }

    lastPage() {
        this.pageNumber = this.totalPages;
        this.paginationHelper();
    }

    paginationHelper() {
        this.recordsToDisplay = [];
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
        if (this.pageNumber <= 1) {
            this.pageNumber = 1;
        } else if (this.pageNumber >= this.totalPages) {
            this.pageNumber = this.totalPages;
        }
        for (let i = (this.pageNumber - 1) * this.pageSize; i < this.pageNumber * this.pageSize; i++) {
            if (i === this.totalRecords) {
                break;
            }
            this.recordsToDisplay.push(this.applicantList[i]); // Corrected from records to applicantList
        }
    }

    editHandler() {
        console.log('Inside Edit Handler Method');
    }
}
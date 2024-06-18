// applicationModel.ts
export interface NewApplication {
    clientId?: string;
    coverType?: string;
    dateOfBirth?: string;
    firstName?: string;
    id?: string
    lastName?: string;
    onRiskDate?: string;
    planType?: string;
      

      
     
}
  

// The reason there is a question mark or 'undefined symbol' ?, because there will be a point in time were there will be no value for these fields so they will be undefined as to not cause issues
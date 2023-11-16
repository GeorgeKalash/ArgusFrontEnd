import { Formik, Form } from "formik";

import CustomTextField from "../../components/Inputs/CustomTextField";
import CustomComboBox from "../../components/Inputs/CustomComboBox";
import CustomDatePicker from "../../components/Inputs/CustomDatePicker";
import CustomLookup from "../../components/Inputs/CustomLookup";

const Test = () => {

  return (
    <div>
      
     


      <Formik>
     
          <Form>
            <div className="border w-[35%] m-auto mt-20 rounded-lg shadow-lg">
              <div className="bg-black px-5 py-3 rounded-t-lg">
                <span className="text-white">test</span>
              </div>
      
              <div className="p-5 rounded-lg">
                <div className="flex flex-col gap-4">
            

                  <CustomTextField 
                    name="first_name" 
                    size="small" 
                    label="First Name"  
                    fullWidth="true" 
    
                  />
                  <CustomTextField
                    name="last_name"
                    size="small"
                    fullWidth="true"
                    label="Last Name"
                    type="text"
                
                  />
                  <CustomComboBox name="gender" label="Gender"/>

                  <CustomDatePicker name="date" label="date"/>

                  <CustomLookup />
                </div>

                <div className="flex flex-col">
              
                  <div className="m-auto mt-4">
                    <button
                      type="submit"
                      className="bg-[#808080] text-white px-5 py-2 rounded-lg"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
       
      </Formik>
    </div>
  );
};

export default Test;

import React from 'react'
import './BuiltContract.css'

function BuiltContract() {
  const validateURL = ()=>{
    console.log("Submitted")
  }
  
  return (
      <>
        <div className='built-container'>
            <h1>Compliance Easy</h1>
        <div className='doc-container'>
        <div id="data-input">
          <div v-if="!processing">
            <h4>Paste your Google Spreadsheet URL...</h4>
            <p>(<a href="https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/copy" target="_blank">make a copy</a>)</p>
            <div class="input-container">
              <div class="data-link-input">
                <form onSubmit={validateURL}>
                  <input type="text" class="form-control" placeholder="Paste your Google Spreadsheet URL here." v-model="parseURL"/>
                </form>
              </div>
              <h4>... or choose a file from your computer</h4>
              <p>(<a href="https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/export?format=xlsx&gid=0">download sample</a>)</p>
              <div class="data-upload-input">
                <label class="custom-file">
                  <input type="file" class="custom-file-input" onChange="parseUpload"/>
                  {/* <span class="custom-file-control">Choose file...</span> */}
                </label>
              </div>
            </div>
          </div>
          <div v-else>
            <h4>Processing...</h4>
          </div>
        </div>
  </div>
        </div>
    </>
  )
}

export default BuiltContract
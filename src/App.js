import React, { useEffect, useCallback } from 'react';
import {
  Route,
  Link,
  useHistory
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import ServiceDocument from 'carelogic-formio-svdoclib';
import serviceDocumentJSON from "./serviceDocumentJSON";
import modules from "./SVDModulesJSON";

function App() {
  const history = useHistory();

  const onSubmit = (submission) => {
    console.log(submission)
    return 'Error!';
  };

  const onCancel = (event) => {
    console.log('Cancel: ', event)
  };

  const onNext = useCallback((formData) => {
    console.log('onNext: ', formData)
  }, []);

  const onPrev = (formData) => {
    console.log('onPrev: ', formData)
  };
  const submission = {
    "data": {
      "signaturePageForm": {
        "program": "",
        "externalSignatures": {
          "externalName1": "",
          "externalNameSameAsClient1": false,
          "externalSignature1": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABHUAAACWCAYAAABQDbQSAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3Xvsl1UdB/BjNzedyWpETgXNGWIBslJshqYWuobmmGl/wFbO1CIKdGFlF1NkXqa1oZnYKhc5cUVlLIEmK9QUsRigy2TYNMsWqaiTdZ3t87Tz2yNy+V2+l+fyOttvwI/v93nOeZ3nx/Z98znn7LNjx45XkkaAAAECBAgQIECAAAECBAgQIFArgX2EOrWaL50lQIAAAQIECBAgQIAAAQIECBQCQh0PAgECBAgQIECAAAECBAgQIECghgJCnRpOmi4TIECAAAECBAgQIECAAAECBIQ6ngECBAgQIECAAAECBAgQIECAQA0FhDo1nDRdJkCAAAECBAgQIECAAAECBAgIdTwDBAgQIECAAAECBAgQIECAAIEaCgh1ajhpukyAAAECBAgQIECAAAECBAgQEOp4BggQIECAAAECBAgQIECAAAECNRQQ6tRw0nSZAAECBAgQIECAAAECBAgQICDU8QwQIECAAAECBAgQIECAAAECBGooINSp4aTpMgECBAgQIECAAAECBAgQIEBAqOMZIECAAAECBAgQIECAAAECBAjUUECoU8NJ02UCBAgQIECAAAECBAgQIECAgFDHM0CAAAECBAgQIECAAAECBAgQqKGAUKeGk6bLBAgQIECAAAECBAgQIECAAAGhjmeAAAECBAgQIECAAAECBAgQIFBDAaFODSdNlwkQIECAAAECBAgQIECAAAECQh3PAAECBAgQIECAAAECBAgQIECghgJCnRpOmi4TIECAAAECBAgQIECAAAECBIQ6ngECBAgQIECAAAECBAgQIECAQA0FhDo1nDRdJkCAAAECBAgQIECAAAECBAgIdTwDBAgQIECAAAECBAgQIECAAIEaCgh1ajhpukyAAAECBAgQIECAAAECBAgQEOp4BggQIECAAAECBAgQIECAAAECNRQQ6tRw0nSZAAECBAgQIECAAAECBAgQICDU8QwQIECAAAECBAgQIECAAAECBGooINSp4aTpMgECBAjUQ+CFF15IGzduTPvss8+rOjxp0qR04IEH1mMQekmAAAECBAgQIFBZAaFOZadGxwgQIECgbgJr165N9957b/EVYU6EOrtrEeqMGzeu+IqQZ9SoUcWv8f1439ixY4u/0wgQIECAAAECBAjsTkCo49kgQIAAAQLDFPjxj3+cbr311vTkk08WX91oU6dOTX/961+L68+aNSuNHz8+HX744WnmzJnduJ1rEiBAgAABAgQI1EhAqFOjydJVAgQIEOivwLZt29KSJUvSunXr0pYtW3YZ5Bx00EHpPe95T5o8efIuq202bdpUVOJs3749xe8jrHnqqaeGPLApU6akd73rXemyyy5T0TNkPW8gQIAAAQIECDRDQKjTjHk0CgIECBDoskCEOfPmzXvNXU488cQ0ffr0YulUVNAcccQRw+pJhDsR9jz//PPpvvvuS6NHj04PP/xw+u9//5te//rXp6VLl+72ulHBM3v27DRt2rRh3dubCBAgQIAAAQIE6ikg1KnnvOk1AQIECPRIYOvWrelrX/taWr58+cAdzzjjjHTqqaem0047radVMs8++2yxV88dd9yRHn300bRhw4ZXKZxyyinps5/9bBEyaQQIECBAgAABAs0XEOo0f46NkAABAgRGIHDyyScXy62izZ07N5199tnp2GOPHcEVO/fWxYsXF5syr1ix4lUXPfPMM9P8+fNT7MejESBAgAABAgQINFdAqNPcuTUyAgQIEBihQCxryhU6sXdNfFWxRbDz1a9+dSB8yn2scp+r6KhPBAgQIECAAIG6CQh16jZj+kuAAAECPRG44oor0tVXX13c65JLLklXXnllT+47kpvEsqzvf//7KY5Wzy1OydrTfjwjuZ/3EiBAgAABAgQI9FdAqNNff3cnQIAAgQoK/P73vy9OsIp20kknpbvvvruCvdx9l6K6KJZfxWld0QQ7tZo+nSVAgAABAgQIDFpAqDNoKi8kQIAAgbYInHXWWWn16tXFcB944IHiePK6tViSFRs55xbVOhHuaAQIECBAgAABAs0REOo0Zy6NhAABAgQ6IBBLmM4777ziSnVZdrW7Ye8c7EQF0rhx4zqg5BIECBAgQIAAAQJVEBDqVGEW9IEAAQIEKiMQy63Wr1+fDjnkkPT4449Xpl/D7UickHXppZcWb4+Nn5csWTLcS3kfAQIECBAgQIBAxQSEOhWbEN0hQIAAgf4JlCtbbrjhhnTRRRf1rzMdvPN+++03cLX7778/TZkypYNXdykCBAgQIECAAIF+CQh1+iXvvgQIECBQOYGrrroqxdfBBx+ctmzZUrn+DbdDGzZsSCeccELx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+jgdbk2AAAECLRQQ6rRw0g2ZAAECBAgQIECAAAECBAgQqL+AUKf+c2gEBAgQIECAAAECBAgQIECAQAsFhDotnHRDJkCAAAECBAgQIECAAAECBOovINSp/xwaAQECBAgQIECAAAECBAgQINBCAaFOCyfdkAkQIECAAAECBAgQIECAAIH6Cwh16j+HRkCAAAECBAhtmioAAAAD4ElEQVQQIECAAAECBAi0UECo08JJN2QCBAgQIECAAAECBAgQIECg/gJCnfrPoREQIECAAAECBAgQIECAAAECLRQQ6rRw0g2ZAAECBAgQIECAAAECBAgQqL+AUKf+c2gEBAgQIECAAAECBAgQIECAQAsFhDotnHRDJkCAAAECBAgQIECAAAECBOovINSp/xwaAQECBAgQIECAAAECBAgQINBCAaFOCyfdkAkQIECAAAECBAgQIECAAIH6Cwh16j+HRkCAAAECBAgQIECAAAECBAi0UECo08JJN2QCBAgQIECAAAECBAgQIECg/gJCnfrPoREQIECAAAECBAgQIECAAAECLRQQ6rRw0g2ZAAECBAgQIECAAAECBAgQqL+AUKf+c2gEBAgQIECAAAECBAgQIECAQAsFhDotnHRDJkCAAAECBAgQIECAAAECBOovINSp/xwaAQECBAgQIECAAAECBAgQINBCAaFOCyfdkAkQIECAAAECBAgQIECAAIH6Cwh16j+HRkCAAAECBAgQIECAAAECBAi0UECo08JJN2QCBAgQIECAAAECBAgQIECg/gJCnfrPoREQIECAAAECBAgQIECAAAECLRQQ6rRw0g2ZAAECBAgQIECAAAECBAgQqL+AUKf+c2gEBAgQIECAAAECBAgQIECAQAsFhDotnHRDJkCAAAECBAgQIECAAAECBOovINSp/xwaAQECBAgQIECAAAECBAgQINBCAaFOCyfdkAkQIECAAAECBAgQIECAAIH6Cwh16j+HRkCAAAECBAgQIECAAAECBAi0UECo08JJN2QCBAgQIECAAAECBAgQIECg/gJCnfrPoREQIECAAAECBAgQIECAAAECLRQQ6rRw0g2ZAAECBAgQIECAAAECBAgQqL+AUKf+c2gEBAgQIECAAAECBAgQIECAQAsFhDotnHRDJkCAAAECBAgQIECAAAECBOovINSp/xwaAQECBAgQIECAAAECBAgQINBCAaFOCyfdkAkQIECAAAECBAgQIECAAIH6Cwh16j+HRkCAAAECBAgQIECAAAECBAi0UECo08JJN2QCBAgQIECAAAECBAgQIECg/gJCnfrPoREQIECAAAECBAgQIECAAAECLRQQ6rRw0g2ZAAECBAgQIECAAAECBAgQqL+AUKf+c2gEBAgQIECAAAECBAgQIECAQAsFhDotnHRDJkCAAAECBAgQIECAAAECBOovINSp/xwaAQECBAgQIECAAAECBAgQINBCAaFOCyfdkAkQIECAAAECBAgQIECAAIH6Cwh16j+HRkCAAAECBAgQIECAAAECBAi0UOB/2QziIZuqm9AAAAAASUVORK5CYII=",
          "externalName2": "",
          "externalNameSameAsClient2": false,
          "externalSignature2": ""
        },
        "staffSignature": "",
        "nextStuffToSign": ""
      },
      "cancel": false,
      "submit": false
    }
  }

  return (
      <div className="App">

          <ServiceDocument
            serviceDocument={serviceDocumentJSON}
            onSubmit={onSubmit}
            onCancel={onCancel}
            submission={submission}
            modules={modules}
            onNext={onNext}
            onPrev={onPrev}
          />

      </div>
  );
}

export default App;
In this project, I build a **Beyond Imagination Technology Assignment** app by applying the concepts I have learned till now.

### Refer to the video below:

<br/>
<div style="text-align: center;">
    <iframe src="https://drive.google.com/uc?export=embed&id=1dc-PFqxUmEJmOISJMcRCnzITRtGSbJys" width="640" height="480" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

</div>
<br/>


### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When an unauthenticated user, then the page should be navigated to Login Route


</details>

<details>

<summary>API Requests & Responses</summary>
<br/>


#### Method: `GET`

#### Description:




#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Product Not Found"
}
```

</details>

<details>


<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/LoginForm/index.js`
- `src/components/LoginForm/index.css`
- `src/components/PerformanceByAge/index.js`
- `src/components/PerformanceByAge/index.css`
- `src/components/PerformanceByGender/index.js`
- `src/components/PerformanceByGender/index.css`

</details>



### Important Note

<details>

-  User credentials

  ```
   username: rahul
   password: rahul@2021
  ```



- Wrap the Loader component with an HTML container element and add the `data-testid` attribute value as `loader` to it

  ```jsx
  <div data-testid="loader">
    <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
  </div>
  ```

-
### Resources



<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #cbced2; width: 150px; padding: 10px; color: black">Hex: #cbced2</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.


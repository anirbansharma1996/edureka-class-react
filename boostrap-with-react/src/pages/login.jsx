export default function Login() {
  return (
    <div class="row container">
        <h1>LOGIN</h1>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
    
      <button style={{marginTop:"1rem"}} className="btn btn-primary">LOGIN</button>
    </div>
  );
}

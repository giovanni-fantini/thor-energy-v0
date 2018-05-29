const routeCardContent = () => {
  const html = `
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Where are you going?</label>
        <input type="text" class="form-control" id="destination" aria-describedby="emailHelp">
      </div>
      <button type="submit" class="btn btn-primary">Go</button>
    </form>
  `;
  return html
}

export { routeCardContent };

import albumImg from "./../../../assets/img/blackNWhiteAlbum.jpeg";

function Mojo() {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3 mx-auto px-4">
      <div className="table-container rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
      <div className="container-bloc rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
      <div className="container-bloc rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
      <div className="container-bloc rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
      <div className="container-bloc rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
      <div className="container-bloc rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
      <div className="container-bloc rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
      <div className="container-bloc rounded box-border h-64 w-64 border-4">
        <img src={albumImg} />
      </div>
    </div>
  );
}

export default Mojo;

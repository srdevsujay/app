export const buttonEditColumn = () => {
  return (
    <div className="btn-group" role="group">
      <button
        id="btnGroupDrop1"
        type="button"
        className="btn mr-2 dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {/* <img src={ellipsisOff} alt="" className="" /> */}
      </button>
      <div
        className="dropdown-menu dropdown-style"
        aria-labelledby="btnGroupDrop1"
      >
        <button
          className="dropdown-item dropdown-style-button"
          // onClick={() => editLead(param)}
        >
          {/* <img src={edit} height="12" className="" /> */}
          Editar
        </button>
        <button
          className="dropdown-item dropdown-style-button"
          // onClick={() => deleteLead(param)}
        >
          {/* <img src={deleted} height="12" className="" /> */}
          Eliminar
        </button>
        {/* <button class="dropdown-item" href="#">Dropdown link</button> */}
      </div>
    </div>
  );
};

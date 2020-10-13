import React from "react";
import { usePeopleForm } from "./../../hooks/PeopleForm.hook";

export const PeopleForm = ({ dispatcher }) => {
  const form = usePeopleForm(dispatcher);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        Add new
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                {...form.nameInput}
                placeholder="Name"
              />
              <input
                className="form-control"
                type="text"
                {...form.heightInput}
                placeholder="Height"
              />
              <input
                className="form-control"
                type="text"
                {...form.massInput}
                placeholder="Mass"
              />
              <select className="custom-select mr-sm-2" {...form.genderInput}>
                <option selected value="n/a">
                  n/a
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                {...form.submitButton}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

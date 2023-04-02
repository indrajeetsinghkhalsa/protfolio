import "./ProjectWidget.scss";

export const ProjectWidget = ({ projectList }) => {
  return !projectList ? (
    <></>
  ) : (
    <div className="row">
      {projectList.map((project) => (
        <div className="col-md-6 mb-5">
          <div className="card project-card">
            <div className="row">
              <div className="col-12 col-xl-5 card-img-holder">
                <img src={project.imageIcon} />
              </div>
              <div className="col-12 col-xl-7">
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#" class="theme-link">
                      {project.header}
                    </a>
                  </h5>
                  <p className="card-text">{project.body}</p>
                  <p className="card-text">
                    <small class="text-muted">{project.footer}</small>
                  </p>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <svg
                      class="svg-inline--fa fa-eye me-2"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="eye"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"
                      ></path>
                    </svg>
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

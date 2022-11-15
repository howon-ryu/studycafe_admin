const Branch_info = () => {
  return (
    <div className="branch_info">
      <div className="col-xl-12  mb-5 mb-xl-10 card__right_wrap">
        <div className="card card-flush h-xl-100 card__right">
          <div className="card-header py-7">
            <div
              className="card-title mb-0 gap-4 gap-lg-8 gap-xl-10 nav nav-tabs border-bottom-0"
              data-kt-table-widget-3="tabs_nav"
            >
              <div
                className="fs-4 fw-bold pb-3 border-3 border-primary cursor-pointer right__tab_btn right__tab01_btn"
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Show All"
              >
                상세정보
              </div>

              <div
                className="fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab02_btn on"
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
              >
                관리그룹
              </div>

              <div
                className="fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab03_btn"
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
              >
                학습실
              </div>
              <div
                className="fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab04_btn"
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
              >
                알림톡 설정
              </div>
            </div>
          </div>

          <div className="card-body pt-1 card_right_body right__tab_con right__tab02_con on">
            <div className="right__tab02_table tab02 mb-20">
              <select
                name="status"
                data-control="select2"
                data-hide-search="true"
                data-placeholder="Filter"
                className="form-select form-select-solid form-select-sm fw-bold w-100px"
              >
                <option value="1" selected="selected">
                  사용중인 관리그룹
                </option>
                <option value="2">대기중인 관리그룹</option>
                <option value="3">삭제된 관리그룹</option>
              </select>

              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id="kt_project_users_table"
              >
                <thead className="text-gray-400">
                  <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th className="min-w-25px">NO.</th>
                    <th className="min-w-150px">관리그룹 이름</th>
                    <th className="min-w-100px">등록일</th>
                    <th className="min-w-25x n_empty"></th>
                    <th className="min-w-50px pe-5 text-end">사용여부</th>
                  </tr>
                </thead>

                <tbody className="fw-semibold text-gray-600">
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          1
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재수</td>
                    <td data-order="Invalid date">2022-08-05</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-success me-2">
                        사용
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          2
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-08</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-warning me-2">
                        대기
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          3
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-24</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-danger me-2">
                        삭제
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          4
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재수</td>
                    <td data-order="Invalid date">2022-08-05</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-success me-2">
                        사용
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          5
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-08</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-warning me-2">
                        대기
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          6
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-24</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-danger me-2">
                        삭제
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          7
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재수</td>
                    <td data-order="Invalid date">2022-08-05</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-success me-2">
                        사용
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          8
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-08</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-warning me-2">
                        대기
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          9
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-24</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-danger me-2">
                        삭제
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row mb-5 row__line">
              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">관리그룹 이름</label>

                <input
                  type="text"
                  className="form-control"
                  value="재수"
                  name=""
                />
              </div>

              <div className="col-md-6 fv-row"></div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4 fv-row">
                <label className="fs-5 fw-semibold mb-2">최종 수정자 ID</label>

                <input
                  type="text"
                  className="form-control form-control-solid"
                  value="wintergreen"
                  name=""
                  readonly
                />
              </div>

              <div className="col-md-4 fv-row">
                <label className="fs-5 fw-semibold mb-2">최종 수정 일시</label>

                <input
                  type="date"
                  className="form-control form-control-solid"
                  value="2019-09-22"
                  name=""
                  readonly
                />
              </div>

              <div className="col-md-4 fv-row">
                <label className="fs-5 fw-semibold mb-2">사용</label>

                <div className="d-flex check__use_wrap">
                  <div className="form-check form-check-custom form-check-solid me-5 check__use">
                    <input
                      className="form-check-input check__use_input"
                      type="radio"
                      value=""
                      name="choice_use"
                      id="product_tax_yes"
                      checked="checked"
                    />
                    <label className="form-check-label" for="product_tax_yes">
                      사용
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-solid me-5 check__hold">
                    <input
                      className="form-check-input check__hold_input"
                      type="radio"
                      value=""
                      name="choice_use"
                    />
                    <label className="form-check-label" for="product_tax_no">
                      대기
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-solid check__delet">
                    <input
                      className="form-check-input check__delet_input"
                      type="radio"
                      value=""
                      name="choice_use"
                    />
                    <label className="form-check-label" for="product_tax_no">
                      삭제
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer d-flex justify-content-end py-6">
            <button
              type="reset"
              className="btn btn-light btn-active-light-primary me-2"
            >
              취소
            </button>
            <button type="submit" className="btn btn-primary">
              변경사항 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Branch_info;

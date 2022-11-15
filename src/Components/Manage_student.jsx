import { css } from "@emotion/react";
import React from "react";

const Manage_student = () => {
  return (
    <div className="manage_student">
        <div className="col-xl-12  mb-5 mb-xl-10 card__right_wrap"
        >
                     
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
                            
                            <div className="fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab02_btn on" data-kt-table-widget-3="tab" data-kt-table-widget-3-value="Pending">학부모정보</div>
                            
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
                                사용중인 학부모
                              </option>
                              <option value="2">대기중인 학부모</option>
                              <option value="3">삭제된 학부모</option>
                            </select>
                  
                            <table
                                className="table align-middle table-row-dashed fs-6 gy-5"
                                id="kt_ecommerce_edit_order_product_table"
                              >
                          
                                <thead className="text-gray-400">
                                  <tr
                                    className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0"
                                  >
                                    <th className="min-w-25px"></th>
                                    <th className="min-w-70px">학부모명</th>
                                    <th className="min-w-50px">관계</th>
                                    <th className="min-w-125px">학부모 연락처</th>
                                    <th className="min-w-50px">대표부모</th>
                                    <th className="min-w-100px">최초 입력</th>
                                    <th className="min-w-40px pe-5 text-end">
                                      사용여부
                                    </th>
                                  </tr>
                                </thead>
                           
                                <tbody className="fw-semibold text-gray-600">
                         
                                  <tr>
                                    <td>
                                      <div
                                        className="form-check form-check-sm form-check-custom form-check-solid"
                                      >
                                        <span
                                          className="text-gray-600 text-hover-primary ms-4"
                                          >1</span
                                        >
                                      </div>
                                    </td>
                                    <td data-order="Invalid date">김엄마</td>
                                    <td data-order="Invalid date">엄마</td>
                                    <td data-order="Invalid date">
                                      010-1234-4567
                                    </td>
                                    <td data-order="Invalid date t__center">
                                      <input
                                        className="form-check-input widget-13-check"
                                        type="checkbox"
                                        value="1"
                                        checked
                                        disabled
                                      />
                                    </td>
                                    <td data-order="Invalid date">
                                      2022-08-14
                                    </td>
                                    <td className="text-muted fw-semibold text-end">
                                      <span className="badge badge-light-success"
                                        >사용</span
                                      >
                                    </td>
                                  </tr>
                                
                                  <tr>
                                    <td>
                                      <div
                                        className="form-check form-check-sm form-check-custom form-check-solid"
                                      >
                                        <span
                                          className="text-gray-600 text-hover-primary ms-4"
                                          >2</span
                                        >
                                      </div>
                                    </td>
                                    <td data-order="Invalid date">홍아빠</td>
                                    <td data-order="Invalid date">아빠</td>
                                    <td data-order="Invalid date">
                                      010-1234-4567
                                    </td>
                                    <td data-order="Invalid date t__center">
                                      <input
                                        className="form-check-input widget-13-check"
                                        type="checkbox"
                                        value="1"
                                        checked
                                        disabled
                                      />
                                    </td>
                                    <td data-order="Invalid date">
                                      2022-08-14
                                    </td>
                                    <td className="text-muted fw-semibold text-end">
                                      <span className="badge badge-light-warning"
                                        >대기</span
                                      >
                                    </td>
                                  </tr>
                             
                                </tbody>
                            
                              </table>
                          
                          </div>
                    

                          
                          
                          <div className="row mb-5">
                          
                            <div className="col-md-6 fv-row">
                   
                              <label className="required fs-5 fw-semibold mb-2"
                                >학부모명</label
                              >
                             
                              <input type="text" className="form-control" value="김엄마" name=""/>
                              
                            </div>
                       
                            <div className="col-md-6 fv-row">
                          
                              <label className="fs-5 fw-semibold mb-2"
                                >관계</label
                              >
                           
                              <select
                              name="position"
                              data-control="select2"
                              data-placeholder="Select a position..."
                              className="form-select form-select-solid"
                              >
                                <option value="Web Developer">
                                  엄마
                                </option>
                                <option value="Web Designer">아빠</option>
                                <option value="Art Director">형제/자매</option>
                                <option value="Finance Manager">
                                  기타
                                </option>
                              </select>
                          
                            </div>
                          
                          </div>
                   
                          <div className="row mb-5 row__line">
                          
                            <div className="col-md-6 fv-row">
                           
                              <label className="required fs-5 fw-semibold mb-2"
                                >연락처</label
                              >
                          
                              <input type="text" className="form-control" value="010-1234-5678" name=""/>
                             
                            </div>
                           
                            <div className="col-md-6 fv-row">
                          
                              <label className="fs-5 fw-semibold mb-2"
                                >대표부모</label
                              >
                            
                              <div className="d-flex align-items-center check_box_input">
                              
                                <input className="form-check-input widget-13-check me-4" type="checkbox" value="1" checked=""/>
                                <span>대표부모</span>
                              
                              </div>  
                            </div>
                           
                          </div>
                         
                          <div className="row mb-5">
                          
                            <div className="col-md-4 fv-row">
                              <label className="fs-5 fw-semibold mb-2"
                                >최종 수정자 ID</label
                              >
                           
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                value="wintergreen"
                                name=""
                                readonly
                              />
                            </div>
                           
                            <div className="col-md-4 fv-row">
                            
                              <label className="fs-5 fw-semibold mb-2"
                                >최종 수정 일시</label
                              >
                          
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
                          
                                  <div
                                    className="form-check form-check-custom form-check-solid me-5 check__use"
                                  >
                                    <input
                                      className="form-check-input check__use_input"
                                      type="radio"
                                      value=""
                                      name="choice_use"
                                      id="product_tax_yes"
                                      checked="checked"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="product_tax_yes"
                                      >사용</label
                                    >
                                  </div>
                                  <div
                                    className="form-check form-check-custom form-check-solid me-5 check__hold"
                                  >
                                    <input
                                      className="form-check-input check__hold_input"
                                      type="radio"
                                      value=""
                                      name="choice_use"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="product_tax_no"
                                      >대기</label
                                    >
                                  </div>
                                  <div
                                    className="form-check form-check-custom form-check-solid check__delet"
                                  >
                                    <input
                                      className="form-check-input check__delet_input"
                                      type="radio"
                                      value=""
                                      name="choice_use"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="product_tax_no"
                                      >삭제</label
                                    >
                                  </div>
                            
                                </div>
                            </div>
                       
                          </div>
                     
                        </div>
                     
                        <div className="card-footer d-flex justify-content-end py-6">
                          <button type="reset" className="btn btn-light btn-active-light-primary me-2">취소</button>
                          <button type="submit" className="btn btn-primary">변경사항 저장</button>
                        </div>
                       
                    </div>
                    
           
        </div>


        </div>
  );
}
export default Manage_student
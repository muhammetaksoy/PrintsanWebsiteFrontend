import React, { useEffect, useState } from 'react';
import classes from './Admin.module.css';
const Admin = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetActiveProducts")
            .then((response) => response.json())
            .then(response => {
                setProducts(response) 
                console.log(response)
            })
    }, []);

    const productToPrint = products.map (item =><tr role="row" className="odd">
    <td className="table-column-pr-0">
    </td>
    <td className="table-column-pl-0">
        <div className="avatar avatar-sm avatar-circle mr-2">
          <img className={classes.img} src={item.PhotoUrlMain} alt="Image Description"/>
        </div>
    </td>
    <td className={classes.td}>
      {item.CategoryName}
    </td>
    <td className={classes.td}>{item.isPopular ? "Popüler Ürün" : "Popüler Ürün Değil"}</td>
  </tr> )
 return (
    <section className={classes.section}>
       <div className="card mb-3 mb-lg-5">
          <div className={`table-responsive datatable-custom ${classes.table} `}>
            <div id="datatable_wrapper" className="dataTables_wrapper no-footer"><table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer" data-hs-datatables-options="{
                     &quot;columnDefs&quot;: [{
                        &quot;targets&quot;: [0, 1, 4],
                        &quot;orderable&quot;: false
                      }],
                     &quot;order&quot;: [],
                     &quot;info&quot;: {
                       &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                     },
                     &quot;search&quot;: &quot;#datatableSearch&quot;,
                     &quot;entries&quot;: &quot;#datatableEntries&quot;,
                     &quot;pageLength&quot;: 8,
                     &quot;isResponsive&quot;: false,
                     &quot;isShowPaging&quot;: false,
                     &quot;pagination&quot;: &quot;datatablePagination&quot;
                   }" role="grid" aria-describedby="datatable_info">
              <thead className="thead-light">
                <tr role="row"><th scope="col" className="table-column-pr-0 sorting_disabled" aria-label="" >
                  </th>
                  <th className="table-column-pl-0 sorting_disabled"  aria-label="image" style={{"width": "296.688px;"}}>Fotoğraf</th>
                  <th className="sorting"  aria-controls="datatable" aria-label="Status: activate to sort column ascending" style={{"width": "165.203px;"}}>Kategori</th>
                  <th className="sorting" aria-controls="datatable" aria-label="Type: activate to sort column ascending" style={{"width": "214.875px;"}}>Favori Ürün</th>    
                  </tr>
              </thead>

              <tbody>
                  {productToPrint}
              </tbody>
            </table>
                  <button style={{"position": "absolute", "right": "50px"}}>Yeni Ürün Ekle</button>
            </div>
          </div>
        
          
        </div>
    </section>
 )
}
export default Admin;
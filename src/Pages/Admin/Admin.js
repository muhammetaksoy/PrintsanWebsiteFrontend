import React, { useEffect, useState } from 'react';
import classes from './Admin.module.css';
import Modal from '../Anasayfa/Components/UI/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IoLogOutOutline} from "react-icons/io5";
const Admin = () => {
  const token = getToken();
  if (!token) {
    window.location.assign("http://localhost:3000/Login")
  }
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [editIsShown, setEditIsShown] = useState(false);
  const [getCategoryId, setGetCategoryId] = useState('');
  const [getId, setId] = useState('');
  const [isPopular, setIsPopular] = useState('');
  const formData = new FormData();

  useEffect(() => {
    fetch("http://printsanaccess.online/api/Explore/GetActiveProducts")
      .then((response) => response.json())
      .then(response => setProducts(response))
      .catch(error => console.log(error))
    fetch("http://printsanaccess.online/api/Admin/GetProductCategories", {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => setCategories(response))
      .catch(error => console.log(error))
  }, []);

  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  }


  const showEdit = (event) => {
    setId(event.target.value)
    setEditIsShown(true)
  }
  const hideEdit = () => {
    setEditIsShown(false)
  }
  const deleteItem = event => {
    fetch(`http://printsanaccess.online/api/Admin/RemoveProduct?productId=${event.target.value}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.status === 200) {
        toast.success('Silme işlemi başarılı', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        });
        setTimeout(() => {
          window.location.assign("http://localhost:3000/Admin");
        }, 2000);
      }
      if (response.status === 400) {
        toast.error('Silme işlemi başarısız', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        });
      }
      return response.json();
    })
      .then(data => window.location.reload())
      .catch(error => console.log(error))
  }
  let productToPrint = []
  if (products) {
    productToPrint = products.map(item => <tr key={item.ProductId} role="row" className="odd">
      <td className="table-column-pr-0">
      </td>
      <td className="table-column-pl-0">
        <div className="avatar avatar-sm avatar-circle mr-2">
          <img className={classes.img} src={item.PhotoUrlMain} alt={item.CategoryName} />
        </div>
      </td>
      <td className={classes.td}>
        {item.CategoryName}
      </td>
      <td className={classes.td}>{item.isPopular ? "Popüler Ürün" : "Popüler Ürün Değil"}</td>
      <td><button value={item.ProductId} onClick={showEdit}>Düzenle</button></td>
      <td><button value={item.ProductId} onClick={deleteItem}>Sil</button></td>
    </tr>)
  }

  let categoriesToPrint = []
  if (categories.length > 0) {
    categoriesToPrint = categories.map(item => <option value={item.Id}>{item.CategoryName}</option>)
  }

  const showModal = () => {
    setCartIsShown(true)
  }
  const hideModal = () => {
    setCartIsShown(false)
  }

  const selectInputHandler = event => {
    setGetCategoryId(event.target.value)
  }
  const selectInputHandler2 = event => {
    setIsPopular(event.target.value)
  }


  const fileInputHandler = event => {
    formData.append("file", event.target.files[0])
  }

  const fileInputHandler2 = event => {
    formData.append("file2", event.target.files[0])
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (getCategoryId && isPopular) {
      fetch("http://printsanaccess.online/api/Admin/CreateNewProduct", {
        method: 'POST',
        body: JSON.stringify({
          ProductCategoryId: getCategoryId,
          isPopular: isPopular,
          PhotoPath1: "",
          PhotoPath2: ""
        }),
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json; charset=UTF-8"
        }
      }).then((response) => {
        if (response.status === 200) {
          toast.success('Ürün ekleme işlemi başarılı', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          });
        }
        if (response.status === 400) {
          toast.error('Ürün Ekleme işlemi başarısız', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          });
        }
        return response.json();
      })
        .then(data => {
          fetch(`http://printsanaccess.online/api/Admin/PostProductImages?productId=${data.productId}`, {
            method: 'POST',
            headers: {
              "Authorization": `Bearer ${token}`,
            },
            body: formData
          }).then(a => {
            setCartIsShown(false)
            document.location.reload()
          })
            .catch(error => console.log(error))

        })
        .catch(error => console.log(error))
    }

  }

  const editSubmitHandler = event => {
    event.preventDefault();
    if (getCategoryId && isPopular) {
      fetch("http://printsanaccess.online/api/Admin/EditProduct", {
        method: 'POST',
        body: JSON.stringify({
          ProductCategoryId: getCategoryId,
          Id: getId,
          isPopular: isPopular,
          PhotoPath1: "",
          PhotoPath2: "",
          isActive: true
        }),
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json; charset=UTF-8"
        }
      }).then((response) => {
        if (response.status === 200) {
          toast.success('Ürün düzenleme işlemi başarılı', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          });
          setTimeout(() => {
            window.location.assign("http://localhost:3000/Admin");
          }, 2000);
        }
        if (response.status === 400) {
          toast.error('Ürün düzenleme işlemi başarısız', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          });
        }
        return response.json();
      })
      setEditIsShown(false)
    }

  }
  const logOutHandler = () => {
    sessionStorage.removeItem('token');
        toast.success('Admin oturumu kapatıldı', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        });
        setTimeout(() => {
          window.location.assign("http://localhost:3000/Anasayfa");
        },1000);

  }
  return (
    <div>
      {editIsShown && <Modal onHideCart={hideEdit}>
        <form className={classes.form} method="post" onSubmit={editSubmitHandler}>
          <div>
            <label style={{ "marginBottom": "20px" }}>Kategori Seçin:</label>
            <select onChange={selectInputHandler}>
              <option>Kategori seçin</option>
              {categoriesToPrint}
            </select>
            <div>
              <label style={{ "marginBottom": "20px" }}>Is populer:</label>
              <select onChange={selectInputHandler2}>
                <option >Statü seçin</option>
                <option value={"true"}>True</option>
                <option value={"false"}>False</option>
              </select>
            </div>

          </div>

          <button type='submit' style={{ "position": "absolute", "right": "50px", "bottom": "50px" }}>Kaydet</button>
        </form>
        <button style={{ "position": "absolute", "right": "200px", "bottom": "50px" }} onClick={hideEdit}>Kapat</button>
      </Modal>}

      {cartIsShown && <Modal onHideCart={hideModal}>
        <form className={classes.form} method="post" onSubmit={submitHandler}>
          <label style={{ "marginBottom": "20px" }}>Kategori Seçin:</label>
          <select onChange={selectInputHandler}>
            <option>Kategori seçin</option>
            {categoriesToPrint}
          </select>
          <div>
            <label style={{ "marginBottom": "20px" }}>Is populer:</label>
            <select onChange={selectInputHandler2}>
              <option >Statü seçin</option>
              <option value={"true"}>True</option>
              <option value={"false"}>False</option>
            </select>
          </div>


          <div style={{ "marginBottom": "20px" }}>
            <input type="file" name="file" id="file" required onChange={fileInputHandler} />
          </div>
          <div>
            <input type="file" name="file2" id="file2" required onChange={fileInputHandler2} />
          </div>
          <button style={{ "position": "absolute", "right": "200px", "bottom": "50px" }} onClick={hideModal}>Kapat</button>
          <button type='submit' style={{ "position": "absolute", "right": "50px", "bottom": "50px" }}>Kaydet</button>
        </form>

      </Modal>}


      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 "  >
        <div className="container-fluid ">
          <a href='http://localhost:3000/' className="nav-link " aria-current="page">
            <img style={{ height: "90px", width: "220px" }} className="navbar-brand" alt="printsanlogo" src={require("../../images/printsanlogo.png").default} />
          </a>
          <a href='http://localhost:3000/BasvuruOlustur' className={classes.title}>İş İlanı Oluştur</a>
          <a href='http://localhost:3000/Basvurular' className={classes.title}>Başvurular</a>
          <a href='http://localhost:3000/Admin' className={classes.title}>Admin Paneli</a>
          <IoLogOutOutline className={classes.icon} onClick={logOutHandler}/>

        </div>
      </nav>
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
                  <th className="table-column-pl-0 sorting_disabled" aria-label="image">Fotoğraf</th>
                  <th className="sorting" aria-controls="datatable" aria-label="Status: activate to sort column ascending">Kategori</th>
                  <th className="sorting" aria-controls="datatable" aria-label="Type: activate to sort column ascending">Favori Ürün</th>
                </tr>
              </thead>

              <tbody>
                {productToPrint}
              </tbody>
            </table>
              <button style={{ "position": "absolute", "right": "50px" }} onClick={showModal}>Yeni Ürün Ekle</button>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}
export default Admin;
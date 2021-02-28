import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
import { useRouter } from "next/router";
import en from "../locales/en";
import ru from "../locales/ru";
function Products({ product, producten }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ru;
  const [company, setCompany] = useState(0);
  const [productobject, setProductobject] = useState({});
  const [isdisplayed, setIsisplayed] = useState(false);

  var disproduct = locale === "en" ? producten : product;

  const [active, setActive] = useState(0);
  let items = [];
  var mynum = parseInt(disproduct.results[company].data.item.length / 12) + 1;
  for (let number = 1; number <= mynum; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => setActive(parseInt(e.target.innerText))}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
  useEffect(() => {
    router.query.num ? setCompany(router.query.num) : setCompany(0);
    setActive(1);
  }, [locale]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  return (
    <MainLayout>
      <div className="container">
        <header className="text-center mt-4">
          <h1 className="mb-4">{t.Product}</h1>
          <hr />
        </header>
        <section className="row">
          <div className="col-2 companyblock">
            {disproduct.results.map((name, index) => (
              <div key={index}>
                <button
                  onClick={() => {
                    setCompany(index);
                    setActive(1);
                  }}
                  className={company === index ? "active" : ""}
                >
                  {name.data.item[0].itemcompany[0].text.trim()==='J&E' ? 'OTHERS' : RichText.render(name.data.item[0].itemcompany)}
                </button>
                <hr />
              </div>
            ))}
          </div>
          <div className="col-1"></div>
          <div className="col-9 products">
            <div className="products">
              {disproduct.results[company].data.item.map((item, index) => {
                return (
                  <div
                    className={
                      index < 12 * active && index >= 12 * (active - 1)
                        ? "productcard"
                        : "productcard d-none"
                    }
                    key={index}
                  >
                    <a
                      onClick={() => {
                        setProductobject(item);
                        setIsisplayed(true);
                      }}
                    >
                      <div className="imagewrapperr">
                        <img src={item.itemimage.url} alt="loading" />
                      </div>
                      <p>{item.itemtitle[0].text}</p>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center takefullwidth">
              {paginationBasic}
            </div>
          </div>
        </section>
      </div>
      <div
        className={
          isdisplayed === true ? "productdetail" : "productdetail d-none"
        }
      >
        <button className="myButton" onClick={() => setIsisplayed(false)}>
          <i className="far fa-times-circle"></i>
        </button>
        <div className="row flex align-items-center">
          <div className="col-md-6 col-sm-12 text-center align-middle">
            <img
              className="img-fluid mt-2"
              src={isdisplayed === true ? productobject.itemimage.url : ""}
              alt="loading"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <header className="myHeader">
              {isdisplayed === true
                ? RichText.render(productobject.itemtitle)
                : ""}
            </header>
            <main className="m-0">
              <div className="tablebg">
                <table>
                  <tbody>
                    <tr>
                      <td>{t.category}:</td>
                      <td className="my">
                        {isdisplayed === true
                          ? RichText.render(productobject.itemcategory)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>{t.weight}:</td>
                      <td className="my">
                        {isdisplayed === true
                          ? RichText.render(productobject.itemweight)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>{t.company}:</td>
                      <td className="my">
                        {isdisplayed === true
                          ? RichText.render(productobject.itemcompany)
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>{t.expiration}:</td>
                      <td className="my">
                        {isdisplayed === true
                          ? RichText.render(productobject.itemexpiration)
                          : ""}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .takefullwidth {
            width: 100%;
          }
          .companyblock {
            display: block;
            border-radius: 5px;
            padding-top: 16px;
          }
          .companyblock button {
            font-size: 14px;
          }
          .companyblock .active {
            font-weight: bold;
          }
          .products {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 600px;
            padding: 0;
            height: auto;
            min-height: 600px;
            height: auto !important;
            justify-content: space-between;
            margin-bottom: 24px;
          }
          .productcard {
            margin: 4px;
            overflow: hidden;
            text-align: center;
            height: 200px;
            width: 240px;
            padding: 12px;
            border-radius: 4px;
            border: 1px solid rgb(220, 220, 220, 0.5);
          }
          .productcard a {
            cursor: pointer;
          }
          .productcard a:hover {
            font-weight: bold;
            color: #333;
          }
          .imagewrapperr {
            position: relative;
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
            height: 130px;
            width: 100%;
            margin-bottom: 5px;
          }
          .imagewrapperr img {
            width: auto;
            height: auto;
            min-width:60px;
            min-height:120px;
            max-width: 100%;
            max-height: 100%;
          }
          .tablebg {
            background-color: rgb(245, 245, 245);
            border-radius: 10px;
            width: 60%;
            overflow: hidden;
            display: flex;
            justify-content: center;
          }
          .productdetail {
            position: fixed;
            display: flex;
            justify-content: space-around;
            background-color: white;
            top: 104px;
            left: 0;
            width: 100%;
            height: 90%;
            border: 1px solid #f3f3f3;
            z-index: 99;
            border-radius: 10px;
          }
          .productdetail .row {
            width: 100%;
          }
          .productdetail img {
            max-height: 280px;
            width: auto;
          }
          .productdetail table {
          }
          .productdetail table tr {
            border-bottom: 0.5px solid rgb(184, 184, 184);
          }
          .productdetail table td {
            line-height: 1.5;
            padding: 10px 30px;
          }
          .productdetail table tr:last-child {
            border-bottom: none;
          }
          .productdetail table tbody tr td:first-of-type {
            padding-right: 12px;
          }
          .myButton {
            position: absolute;
            top: 10px;
            right: 10px;
            height: 24px;
            width: 24px;
            font-size: 24px;
            align-items: center;
            display: flex;
            color: #333;
            justify-content: center;
            background-color: transparent;
            border: none;
            z-index: 100;
          }
          @media only screen and (max-width: 600px) {
            .productdetail {
              position: fixed;
              display: flex;
              justify-content: space-around;
              background-color: white;
              top: 55%;
              left: 60%;
              width: 400px;
              min-height: 600px;
              margin-left: -240px;
              margin-top: -280px;
              border: 1px solid #f3f3f3;
              border-radius: 10px;
            }
            .productdetail .row {
              width: 100vw;
              height: 90vh;
            }
            .productdetail img {
              max-height: 280px;
              width: auto;
            }
            .products {
              justify-content: center;
            }
            .productdetail main {
              display: flex;
              justify-content: center;
            }
            main .tablebg {
              min-width: 300px;
            }
          }
        `}
      </style>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const product = await Client().query(
    Prismic.Predicates.at("document.type", "products"),{orderings : '[document.first_publication_date]'}
  );
  const producten = await Client().query(
    Prismic.Predicates.at("document.type", "products"),
    { lang: "en-us",
    orderings : '[document.first_publication_date]' }
  ); 
  return {
    props: {
      product: product,
      producten: producten,
    },
  };
}
export default Products;

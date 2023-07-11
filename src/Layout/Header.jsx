import React from "react";

import style from "./Header.module.css";

const Header = ({ wishCount }) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.dropdown}>
          <nav>
            <h2>
              <b>Start bootstrap</b>
            </h2>

            <div className={style.link}>
              <ul>
                <li>
                  <a href="home">Home</a>
                </li>
                <li>
                  <a href="about" className={style.a1}>
                    About
                  </a>
                </li>
                <li>
                  <a href="shop" className={style.a2}>
                    Shop <i className="fa-solid fa-caret-down"></i>
                  </a>
                  <ul className={style.dropdownmenu}>
                    <li>
                      <a href="allProduct">All Product</a>
                    </li>
                    <li className={style.hr}></li>
                    <li>
                      <a href="popularItem">Popular Item</a>
                    </li>
                    <li>
                      <a href="newArrival">New Arrivals</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <form className={style.wishList}>
              <button>
                <i className="fas fa-cart-shopping"></i>
                Cart ({wishCount})
              </button>
            </form>

            <div className={style.bars}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>

      <div className={style.section}>
        <h1>Shop in style</h1>
        <p className={style.p1}>With this shop homepage template</p>
      </div>
    </>
  );
};

export default Header;

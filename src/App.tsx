import Massage from "./Massage";
import UserCard from "./UserCard";
import ClothingProduct from "./ClothingProduct";
import ReviewCard from "./ReviewCard";
import FavoriteButton from "./FavoriteButton";
import "./App.css";
import QuantityCounter from "./QuantityCounter";
import ColorPicker from "./ColorPicker";
import ColorMapper from "./ColorMapper";
import ThemeToggle from "./ThemeToggle";
import ListGroup from "./ListGroup";
import FavCount from "./FavCount";
import ShippingCalc from "./ShippingCalc";
import LikeButton from "./LikeButton";
import LuxuryButton from "./LuxuryButton";
import RymnCardButton from "./RymnCardButton";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { CurrencySwitcher } from "./Components/CurrencySwitcher";

const HomePage = () => {
  function addCard() {
    console.log("add");
  }
  function removeCard() {
    console.log("remove");
  }
  function dressDetails() {
    alert("dress Details is sfjkg;oihoaerhgo;");
  }

  return (
    <>
        <Massage />
        <CurrencySwitcher/>
        <UserCard
          name={"Yara"}
          job={" 🌕 "}
          image={"https://react.dev/images/docs/scientists/MK3eW3As.jpg"}
          imageAlt={"this is alt"}
          isUrgent={true}
        ></UserCard>
        <ClothingProduct
          title={"Dress"}
          price={2300}
          hasDiscount={true}
          color="red"
        ></ClothingProduct>
        <ReviewCard
          name={"Hana"}
          feedback={"to7faaaaaa beeeeegaad"}
          stars={"☪☪☪☪☪"}
          isVIP={true}
          likes={0}
        ></ReviewCard>
        <ColorMapper />
        <FavoriteButton />
        <ColorPicker />
        <QuantityCounter />
        <ListGroup />
        <FavCount />
        <ShippingCalc />
        <LikeButton />
        <LuxuryButton onClickButton={addCard}>Add to Card 🛍️</LuxuryButton>
        <LuxuryButton onClickButton={removeCard}>
          Remove from Card 🛍️
        </LuxuryButton>
        // هنا بقى الالرت هيشتغل من غير ما نضغط على الزرار
        {/* <RymnCardButton onClickFun={alert("Added!")}>
          dress Details
        </RymnCardButton> */}
        //هنحتاج نحبسة جوا الارو فانكشن عشان ما تشتغلش الفانكشن الا لما ننادى
        عليها
        {/* <RymnCardButton onClickFun={()=>alert("Added!")}>
          dress Details
        </RymnCardButton> */}
        <RymnCardButton onClickFun={dressDetails}>dress Details</RymnCardButton>
    </>
  );
};

// 🔒 بداية الـ SecretCartPage
const SecretCartPage = () => {
  return (
    <div style={{ padding: "40px", direction: "rtl", textAlign: "center" }}>
      <h2>🔒 صفحة الحقيبة الخاصة بكِ (RYMN Private Cart)</h2>
      <p>أنتِ بتشوفي الصفحة دي لأنك مسجلة دخول ومعاكي التوكن بنجاح! 😉</p>
    </div>
  );
}; // 3️⃣ قفلة قوس الـ SecretCartPage هنا

function App() {
  return (
    <ThemeToggle>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fav" element={<FavoriteButton />} />
        <Route
          path="card"
          element={
            <ProtectedRoute>
              <SecretCartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ThemeToggle>
  );
}

export default App;

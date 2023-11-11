function Redicrecting({ selectedPageViewState }) {
  const selectPage = (pageLink) => {
    selectedPageViewState.setSelectedPageView(pageLink);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <p>You are being redirect</p>
      <a href="" onClick={() => selectPage("/sign-up/host")}></a>
    </div>
  );
}

export default Redicrecting;

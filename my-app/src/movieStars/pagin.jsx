import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paging = ({ handlePage, defaultPage }) => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem disabled={defaultPage === 1 ? true : false}>
        <PaginationLink onClick={() => handlePage(defaultPage - 1)} previous />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handlePage(1)}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handlePage(2)}>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handlePage(3)}>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handlePage(4)}>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handlePage(5)}>
          {defaultPage <= 5 ? 5 : defaultPage}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => handlePage(defaultPage + 1)} next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" last />
      </PaginationItem>
    </Pagination>
  );
};

export default Paging;

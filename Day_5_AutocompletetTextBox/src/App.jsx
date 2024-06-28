import { Search } from "./components/Search/Search";
import { SearchApi } from "./components/Search/SearchApi";
import { SearchApiUseEffect } from "./components/Search/SearchApiUseEffect";
import { SearchDebounce } from "./components/Search/SearchDebounce";
import SearchThrottle from "./components/Search/SearchThrottle";

function App() {
  return (
    <>
      <table>
        <tr>
          <td>
            {" "}
            <Search />
          </td>
          <td>
            {" "}
            <SearchApi />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <SearchApiUseEffect />
          </td>
          <td>
            {" "}
            <SearchDebounce />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <SearchThrottle />
          </td>
          <td> </td>
        </tr>
      </table>
    </>
  );
}

export default App;

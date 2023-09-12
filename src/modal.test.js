import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../src/lib/components/Modal";

const id = "modal";
const show = true;
const close = jest.fn();
const title = "Modal Title";
const message = "Modal Message";

describe("Modal", () => {
  test("renders Modal component", () => {
    render(
      <Modal
        id={id}
        close={close()}
        show={show}
        message={message}
        title={title}
      />,
    );
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  test("renders Modal component with title and message", () => {
    render(
      <Modal
        id={id}
        close={close()}
        show={show}
        message={message}
        title={title}
      />,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test("renders Modal component with close button", () => {
    const close = jest.fn();
    render(
      <Modal
        id={id}
        close={close()}
        show={show}
        message={message}
        title={title}
      />,
    );
    fireEvent.click(screen.getByTestId("close"));
    expect(close).toHaveBeenCalledTimes(1);
  });
});

import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import Home from "../pages/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";

describe('Testing Home component', () => {
    test('should render correctly', () => {
        render(
            <RouterProvider router={router}>
                <Home />
            </RouterProvider>
        );
        const homeText = screen.getByText("My favorite Images");
        expect(homeText).toBeInTheDocument();
    })

});

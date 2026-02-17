import '@testing-library/jest-dom';

class IntersectionObserverMock {
    observe() {
        return null;
    }

    unobserve() {
        return null;
    }

    disconnect() {
        return null;
    }
}

(global as any).IntersectionObserver = IntersectionObserverMock;

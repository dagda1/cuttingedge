declare enum FailureType {
    Condition = "Condition",
    NoValue = "NoValue"
}
declare type ErrorFormatter = (failureType: FailureType, message?: string, props?: object) => string;
declare type ErrorCreator = (failureType: FailureType, message?: string, props?: object) => Error;
declare type ErrorReporter = (failureType: FailureType, error: Error, message?: string, props?: object) => void;
declare type WarningReporter = (failureType: FailureType, message?: string, props?: object) => void;
export declare type AssertConfiguration = {
    formatter?: ErrorFormatter;
    errorCreator?: ErrorCreator;
    errorReporter?: ErrorReporter;
    warningReporter?: WarningReporter;
};
/**
 * Customize formatting of assertion failure messages, creation of failure Errors and reporting of failures
 * @param custom
 */
export declare function configureAssert(custom: AssertConfiguration): void;
/**
 * For test purpose
 */
export declare function testResetConfiguration(): void;
interface HardAssert {
    /**
     * Verify that a condition is satisfied.
     * @param condition Condition to be true
     * @param message Error message
     * @param props Any props relevant.
     * @throws Throws exception if condition is false.
     */
    (condition: boolean, message?: string, props?: object | (() => object)): asserts condition;
    /**
     * Verify that an optional value actually has a proper value in this context, i.e. not null or undefined.
     * @param value Value to be verified
     * @param message Error message
     * @param props If message is a string id, format any matching key values into message. Props are also reported to dev team.
     * @throws Throws exception if value is null or undefined
     */
    <T>(value: T | undefined | null, message?: string, props?: object | (() => object)): T;
}
interface SoftAssert {
    /**
     * Test if a condition is satisfied. If false, a warning will be reported
     * @param condition Condition to be true
     * @param message Warning message
     * @param props Any props relevant.
     * @returns condition
     */
    (condition: boolean, message?: string, props?: object | (() => object)): condition is true;
    /**
     * Test if an optional value actually is a proper value, i.e. not null or undefined. If value is not proper, a warning
     * will be reported
     * @param value Value to be tested
     * @param message Warning message
     * @param props If message is a string id, format any matching key values into message. Props are also reported to dev team.
     * @throws Throws exception if value is null or undefined
     */
    <T>(value: T | undefined | null, message?: string, props?: object | (() => object)): value is T;
}
interface Assert extends HardAssert {
    soft: SoftAssert;
}
export declare const assert: Assert;
export {};

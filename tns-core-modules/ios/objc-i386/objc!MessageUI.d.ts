
declare const enum MFMailComposeErrorCode {

	SaveFailed = 0,

	SendFailed = 1
}

declare var MFMailComposeErrorDomain: string;

declare const enum MFMailComposeResult {

	Cancelled = 0,

	Saved = 1,

	Sent = 2,

	Failed = 3
}

declare class MFMailComposeViewController extends UINavigationController {

	static canSendMail(): boolean;

	mailComposeDelegate: MFMailComposeViewControllerDelegate;

	constructor(o: { navigationBarClass: typeof NSObject; toolbarClass: typeof NSObject; }); // inherited from UINavigationController

	constructor(o: { rootViewController: UIViewController; }); // inherited from UINavigationController

	addAttachmentDataMimeTypeFileName(attachment: NSData, mimeType: string, filename: string): void;

	setBccRecipients(bccRecipients: NSArray<string>): void;

	setCcRecipients(ccRecipients: NSArray<string>): void;

	setMessageBodyIsHTML(body: string, isHTML: boolean): void;

	setSubject(subject: string): void;

	setToRecipients(toRecipients: NSArray<string>): void;
}

interface MFMailComposeViewControllerDelegate extends NSObjectProtocol {

	mailComposeControllerDidFinishWithResultError?(controller: MFMailComposeViewController, result: MFMailComposeResult, error: NSError): void;
}
declare var MFMailComposeViewControllerDelegate: {

	prototype: MFMailComposeViewControllerDelegate;
};

declare class MFMessageComposeViewController extends UINavigationController {

	static canSendAttachments(): boolean;

	static canSendSubject(): boolean;

	static canSendText(): boolean;

	static isSupportedAttachmentUTI(uti: string): boolean;

	/* readonly */ attachments: NSArray<NSDictionary<any, any>>;

	body: string;

	messageComposeDelegate: MFMessageComposeViewControllerDelegate;

	recipients: NSArray<string>;

	subject: string;

	constructor(o: { navigationBarClass: typeof NSObject; toolbarClass: typeof NSObject; }); // inherited from UINavigationController

	constructor(o: { rootViewController: UIViewController; }); // inherited from UINavigationController

	addAttachmentDataTypeIdentifierFilename(attachmentData: NSData, uti: string, filename: string): boolean;

	addAttachmentURLWithAlternateFilename(attachmentURL: NSURL, alternateFilename: string): boolean;

	disableUserAttachments(): void;
}

declare var MFMessageComposeViewControllerAttachmentAlternateFilename: string;

declare var MFMessageComposeViewControllerAttachmentURL: string;

interface MFMessageComposeViewControllerDelegate extends NSObjectProtocol {

	messageComposeViewControllerDidFinishWithResult(controller: MFMessageComposeViewController, result: MessageComposeResult): void;
}
declare var MFMessageComposeViewControllerDelegate: {

	prototype: MFMessageComposeViewControllerDelegate;
};

declare var MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification: string;

declare var MFMessageComposeViewControllerTextMessageAvailabilityKey: string;

declare const enum MessageComposeResult {

	Cancelled = 0,

	Sent = 1,

	Failed = 2
}

import smtplib
import os
from email.mime.text import MIMEText

class MailService:
    def __init__(self):
        self.PASSWORD = os.environ.get('MAIL_PASSWORD')
        self.SENDER = os.environ.get('MAIL_SENDER')

    def sendMail(self, subject, send_to, content):
        try:
            content = MIMEText(content, 'plain', 'utf-8')
            content['Subject'] = subject
            content['From'] = self.SENDER
            content['To'] = send_to
            with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
                smtp.ehlo()
                smtp.starttls()
                smtp.login(self.SENDER, self.PASSWORD)
                print("Received Mail : ", send_to)
                smtp.sendmail(self.SENDER, send_to, content.as_string())
                smtp.close()
            return {
                'success': True,
                'message' : 'Mail sent successfully',
                'status' : 200
            }
        except Exception as e:
            return {
                'success': False,
                'message' : str(e),
                'status' : 500
            }

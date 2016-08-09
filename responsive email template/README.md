# Responsive Email Template
Here is a baseline template for a HTML Email.

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Code Computerlove - Responsive Email Template</title>
        <style type="text/css">

        body {
            margin: 0;
            padding: 0;
            min-width: 100%!important;
        }

        .content {
            width: 100%;
            max-width: 600px;
        }

        </style>
    </head>
    <body bgcolor="#fff">
        <table width="100%" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table class="content" align="center" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td>
                                Hello!
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>
```

## Outlook Support

If you need support for outlook, add the following around the code:

```
<!--
    Support for Outlook and Locus
-->
<!--[if (gte mso 9)|(IE)]>
<table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
<![endif]-->
<table class="content" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
            Hello!
        </td>
    </tr>
</table>
<!--[if (gte mso 9)|(IE)]>
       </td>
   </tr>
</table>
<![endif]-->
```
This will wrap the main container in a 600px table. Some versions of Outlook use the IE rendering engine
to output the email whereas other versions of Outlook use Microsoft word rendering engine.

## Hiding mobile styles for Yahoo mail
If you need to hide styles for a Yahoo email client then use this:

```
<body yahoo>
```

Then to style fixes for that client you would then:

```
/* CSS */
body[yahoo] .class-name {}
```

## Apple Mail

Apple mail does not support the max-width property, however it does support media queries so if you add the following code it will make your email responsive
in an apple mail client.

```
<style type="text/css">
   /*
       Fix for Apple Mail
   */
   @media only screen and (min-device-width: 601px) {
       .content {
           width: 600px !important;
       }
   }
</style>
```

## Useful Resources

A lot of the information above is has been explained in more detail in these resources. If you want to learn more about responsive emails then these would be very useful guides.

- [Build an HTML Email Template from Scratch](http://dev.tutsplus.com/articles/build-an-html-email-template-from-scratch--webdesign-12770)
- [Creating a Simple Responsive HTML Email](http://webdesign.tutsplus.com/articles/creating-a-simple-responsive-html-email--webdesign-12978)

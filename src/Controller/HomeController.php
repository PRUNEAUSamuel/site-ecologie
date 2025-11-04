<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('home.html.twig');
    }

    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        return $this->render('about.html.twig');
    }

    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {
        return $this->render('contact.html.twig');
    }

    #[Route('/contact/send', name: 'contact_send', methods: ['POST'])]
    public function sendContact(Request $request): Response
    {
        $name = $request->request->get('name');
        $email = $request->request->get('email');
        $message = $request->request->get('message');

        $to = 'contact@example.com';
        $subject = 'Nouveau message de ' . $name;
        $body = "Email: $email\n\n$message";

        // mail() PHP
        @mail($to, $subject, $body);

        $this->addFlash('success', 'Votre message a été envoyé !');

        return $this->redirectToRoute('home');
    }

    #[Route('/privacy', name: 'privacy')]
    public function privacy(): Response
    {
        return $this->render('privacy.html.twig');
    }

    #[Route('/legal', name: 'legal')]
    public function legal(): Response
    {
        return $this->render('legal.html.twig');
    }
}
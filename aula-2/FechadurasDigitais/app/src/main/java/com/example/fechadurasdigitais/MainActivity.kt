package com.example.fechadurasdigitais

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.cardview.widget.CardView
import com.google.android.material.appbar.MaterialToolbar

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mainToolBar = findViewById<MaterialToolbar>(R.id.mainToolBar)
        val fde600wCard = findViewById<CardView>(R.id.fde600wCard)
        val fde300wCard = findViewById<CardView>(R.id.fde300wCard)
        val fde500ProCard = findViewById<CardView>(R.id.fde500ProCard)

        mainToolBar.setNavigationOnClickListener {
            Toast.makeText(this, "Hamburger pressionado!!!", Toast.LENGTH_SHORT).show()
        }

        mainToolBar.setOnMenuItemClickListener { menuItem ->
            when(menuItem.itemId) {
                R.id.menu_item_notifications -> {
                    Toast.makeText(this, "Ir para a página de notificações!!!", Toast.LENGTH_SHORT).show()

                    true
                }
                R.id.menu_item_cart -> {
                    Toast.makeText(this, "Ir para a página de carrinho!!!", Toast.LENGTH_SHORT).show()

                    true
                }
                else -> false
            }
        }

        fde600wCard.setOnClickListener {
            startActivity(Intent(this, Fde600wPage::class.java))
        }

        fde300wCard.setOnClickListener {
            startActivity(Intent(this, Fde300wPage::class.java))
        }

        fde500ProCard.setOnClickListener {
            startActivity(Intent(this, Fde500ProPage::class.java))
        }
    }
}